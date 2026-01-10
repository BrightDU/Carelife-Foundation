// "use client"

// import { useEffect, useState } from "react"
// import { X, RefreshCw } from "lucide-react"

// const CURRENT_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0"
// const DB_NAME = "carelife_app"
// const STORE_NAME = "version_info"

// export default function VersionToast() {
//   const [showToast, setShowToast] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     checkVersion()
//   }, [])

//   const checkVersion = async () => {
//     try {
//       // Try to use IndexedDB for persistent storage
//       if ("indexedDB" in window) {
//         const request = indexedDB.open(DB_NAME, 1)

//         request.onupgradeneeded = () => {
//           const db = request.result
//           if (!db.objectStoreNames.contains(STORE_NAME)) {
//             db.createObjectStore(STORE_NAME)
//           }
//         }

//         request.onsuccess = () => {
//           const db = request.result
//           const transaction = db.transaction(STORE_NAME, "readonly")
//           const store = transaction.objectStore(STORE_NAME)
//           const getRequest = store.get("lastVersion")

//           getRequest.onsuccess = () => {
//             const lastVersion = getRequest.result
//             if (lastVersion !== CURRENT_VERSION) {
//               setShowToast(true)
//             }
//           }
//         }
//       } else {
//         // Fallback to localStorage
//         const storedVersion = localStorage.getItem("app_version")
//         if (storedVersion !== CURRENT_VERSION) {
//           setShowToast(true)
//         }
//       }
//     } catch (error) {
//       console.error("[v0] Version check error:", error)
//     }
//   }

//   const handleUpdate = async () => {
//     setIsLoading(true)

//     try {
//       if ("serviceWorker" in navigator) {
//         // Unregister old service workers
//         const registrations = await navigator.serviceWorker.getRegistrations()
//         for (const registration of registrations) {
//           await registration.unregister()
//         }

//         // Clear all caches
//         const cacheNames = await caches.keys()
//         for (const cacheName of cacheNames) {
//           await caches.delete(cacheName)
//         }
//       }

//       localStorage.setItem("app_version", CURRENT_VERSION)

//       if ("indexedDB" in window) {
//         const request = indexedDB.open(DB_NAME, 1)
//         request.onsuccess = () => {
//           const db = request.result
//           const transaction = db.transaction(STORE_NAME, "readwrite")
//           const store = transaction.objectStore(STORE_NAME)
//           store.put(CURRENT_VERSION, "lastVersion")
//         }
//       }

//       // Hide toast immediately after update
//       setShowToast(false)

//       // Perform hard refresh after a short delay
//       setTimeout(() => {
//         window.location.href = "/"
//         window.location.reload()
//       }, 500)
//     } catch (error) {
//       console.error("[v0] Update failed:", error)
//       setIsLoading(false)
//     }
//   }

//   if (!showToast) return null

//   return (
//     <div className="fixed bottom-6 right-4 z-50 animate-in fade-in slide-in-from-bottom-4 max-w-sm">
//       <div className="bg-card border-l-4 border-primary rounded-lg shadow-lg p-4 flex items-start gap-4">
//         <div className="flex-1">
//           <h3 className="font-semibold text-foreground mb-1">New UI Available</h3>
//           <p className="text-sm text-muted-foreground">A new version of CareLife Foundation is ready to download.</p>
//           <div className="flex gap-2 mt-3">
//             <button
//               onClick={handleUpdate}
//               disabled={isLoading}
//               className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
//             >
//               {isLoading && <RefreshCw className="w-4 h-4 animate-spin" />}
//               {isLoading ? "Updating..." : "Update Now"}
//             </button>
//             <button
//               onClick={() => setShowToast(false)}
//               className="px-4 py-2 bg-muted text-foreground rounded-md text-sm hover:bg-muted/80 transition-colors"
//             >
//               Later
//             </button>
//           </div>
//         </div>
//         <button
//           onClick={() => setShowToast(false)}
//           className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
//           aria-label="Close"
//         >
//           <X className="w-4 h-4" />
//         </button>
//       </div>
//     </div>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import { X, RefreshCw } from "lucide-react"

const CURRENT_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0"
const DB_NAME = "carelife_app"
const STORE_NAME = "version_info"

export default function VersionToast() {
  const [showToast, setShowToast] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    checkVersion()
  }, [])

  const checkVersion = async () => {
    try {
      // Try to use IndexedDB for persistent storage
      if ("indexedDB" in window) {
        const request = indexedDB.open(DB_NAME, 1)

        request.onupgradeneeded = () => {
          const db = request.result
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME)
          }
        }

        request.onsuccess = () => {
          const db = request.result
          const transaction = db.transaction(STORE_NAME, "readonly")
          const store = transaction.objectStore(STORE_NAME)
          const getRequest = store.get("lastVersion")

          getRequest.onsuccess = () => {
            const lastVersion = getRequest.result
            if (lastVersion !== CURRENT_VERSION) {
              setShowToast(true)
            }
          }
        }
      } else {
        // Fallback to localStorage
        const storedVersion = localStorage.getItem("app_version")
        if (storedVersion !== CURRENT_VERSION) {
          setShowToast(true)
        }
      }
    } catch (error) {
      console.error("[v0] Version check error:", error)
    }
  }

  const handleUpdate = async () => {
    setIsLoading(true)

    try {
      if ("serviceWorker" in navigator) {
        // Unregister old service workers
        const registrations = await navigator.serviceWorker.getRegistrations()
        for (const registration of registrations) {
          await registration.unregister()
        }

        // Clear all caches
        const cacheNames = await caches.keys()
        for (const cacheName of cacheNames) {
          await caches.delete(cacheName)
        }
      }

      localStorage.setItem("app_version", CURRENT_VERSION)

      if ("indexedDB" in window) {
        const request = indexedDB.open(DB_NAME, 1)
        request.onsuccess = () => {
          const db = request.result
          const transaction = db.transaction(STORE_NAME, "readwrite")
          const store = transaction.objectStore(STORE_NAME)
          store.put(CURRENT_VERSION, "lastVersion")
        }
      }

      // Hide toast immediately after update
      setShowToast(false)

      setTimeout(() => {
        window.location.href = "/"
        window.location.reload()
      }, 300)
    } catch (error) {
      console.error("[v0] Update failed:", error)
      setIsLoading(false)
    }
  }

  if (!showToast) return null

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 animate-in fade-in slide-in-from-bottom-4 w-[90vw] md:w-auto max-w-sm mx-auto px-4 md:px-0">
      <div className="bg-card border-l-4 border-primary rounded-lg shadow-lg p-4 flex items-start gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">New UI Available</h3>
          <p className="text-sm text-muted-foreground">A new version of CareLife Foundation is ready to download.</p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleUpdate}
              disabled={isLoading}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isLoading && <RefreshCw className="w-4 h-4 animate-spin" />}
              {isLoading ? "Updating..." : "Update Now"}
            </button>
            <button
              onClick={() => setShowToast(false)}
              className="px-4 py-2 bg-muted text-foreground rounded-md text-sm hover:bg-muted/80 transition-colors"
            >
              Later
            </button>
          </div>
        </div>
        <button
          onClick={() => setShowToast(false)}
          className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
