import Skeleton from 'react-loading-skeleton'

export const SkeletonCard = () => {
    return (
        <>
            <Skeleton height={200} style={{ marginBottom: '10px' }} />
            <Skeleton height={30} width="80%" />
        </>
    )
}