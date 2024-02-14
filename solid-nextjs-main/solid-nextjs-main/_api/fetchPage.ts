import axios from "axios";

export const fetchPage = async (slug: string) => {

  const res = await axios(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages?where[slug][equals]=${slug}&depth=2`,
  )
  return res
}
