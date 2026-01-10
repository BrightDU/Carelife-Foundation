"use client"

export function ImageSkeleton() {
  return (
    <div className="w-full h-full bg-muted animate-pulse rounded-lg">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-muted-foreground text-sm">Loading image...</div>
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-card rounded-lg p-6 border border-border animate-pulse">
      <div className="h-4 bg-muted rounded mb-4 w-3/4"></div>
      <div className="h-3 bg-muted rounded mb-3 w-full"></div>
      <div className="h-3 bg-muted rounded mb-3 w-5/6"></div>
      <div className="h-3 bg-muted rounded w-4/6"></div>
    </div>
  )
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-3 bg-muted rounded w-full"></div>
      ))}
    </div>
  )
}
