import dayjs, { Dayjs } from 'dayjs'

// console.log(dayjs.dayjs)
console.log(dayjs().toISOString())

export interface Post {
    id: number
    profileImageURL: string
    fullName: string
    username: string
    imageURL: string
    likesCount: number,
    date: Dayjs
}

export const feedPosts:Post[] = [
    {
        id: 1,
        profileImageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/128`,
        fullName: 'John Smith',
        username: '@johnsmith',
        imageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/1000`,
        likesCount: 20,
        date: dayjs()
    },
    {
        id: 2,
        profileImageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/128`,
        fullName: 'Gagan Madan',
        username: '@gaganmadan',
        imageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/1000`,
        likesCount: 29,
        date: dayjs().subtract(4, 'day')
    },
    {
        id: 3,
        profileImageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/128`,
        fullName: 'Abhishek Anshu',
        username: '@abhishekanshu',
        imageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/1000`,
        likesCount: 15,
        date: dayjs().subtract(3, 'week')
    },
    {
        id: 4,
        profileImageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/128`,
        fullName: 'Abhishek Anshu',
        username: '@abhishekanshu',
        imageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/1000`,
        likesCount: 10,
        date: dayjs().subtract(2, 'month')

    }
]