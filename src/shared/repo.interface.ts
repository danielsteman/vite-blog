export interface IRepo {
  id: number,
  name: string,
  description: string,
  url: string,
  languages: [string]
}

export interface IBlog {
  id: number
  title: string
  date: string
  text: string
  tags: string[]
}
