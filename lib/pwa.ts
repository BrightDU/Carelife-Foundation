export const registerServiceWorker = async () => {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("/sw.js")
    } catch (error) {
      console.error("Service Worker registration failed:", error)
    }
  }
}

export const checkInstallPrompt = (callback: (deferredPrompt: any) => void) => {
  let deferredPrompt: any

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault()
    deferredPrompt = e
    callback(deferredPrompt)
  })

  return deferredPrompt
}
