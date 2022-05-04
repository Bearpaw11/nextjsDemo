import {useRouter} from 'next/router'

const details = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <div>details</div>
  )
}

export default details