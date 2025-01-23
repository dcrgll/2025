export type Album = {
  name: string
  artist: { name: string }
  url: string
}

export type Track = {
  name: string
  artist: { name: string }
  url: string
}

export type Albums = Album[]
export type Tracks = Track[]
