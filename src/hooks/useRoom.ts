import { useEffect } from "react"
import { useState } from "react"
import { database } from "../services/firebase"
import { useAuth } from "./useAuth"

type QuestionsType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHightlighted: boolean;
  likeCount: number;
  likedId: string | undefined;
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  }
  content: string;
  isAnswered: boolean;
  isHightlighted: boolean;
  likes: Record<string, {
    authorId: string;
  }>
}>


export function useRoom(roomId: string) {
  const { user } = useAuth()
  const [questions, setQuestions] = useState<QuestionsType[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      const dataBaseRoom = room.val()
      const firebaseQuestions: FirebaseQuestions = dataBaseRoom.questions ?? {}

      const parsedQuestion = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHightlighted: value.isHightlighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values(value.likes ?? {}).length,
          likedId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
        }
      })
      setTitle(dataBaseRoom.title)
      setQuestions(parsedQuestion);

    })
    return() => {
      roomRef.off('value')

    } 
  }, [roomId, user?.id])

  return { questions, title }
}