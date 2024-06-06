import { Skeleton } from '@/components/ui/skeleton'

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="mt-1 h-7 w-3/4" />
      <Skeleton className="h-4 w-full" />
    </>
  )
}
