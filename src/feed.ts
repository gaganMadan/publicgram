export interface Post {
    id: number
    profileImageURL: string
    fullName: string
    username: string
    imageURL: string
    likesCount: number
}

export const feedPosts:Post[] = [
    {
        id: 1,
        profileImageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/128`,
        fullName: 'John Smith',
        username: '@johnsmith',
        imageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/1000`,
        likesCount: 20
    },
    {
        id: 2,
        profileImageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/128`,
        fullName: 'Gagan Madan',
        username: '@gaganmadan',
        imageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/1000`,
        likesCount: 29
    },
    {
        id: 3,
        profileImageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/128`,
        fullName: 'Abhishek Anshu',
        username: '@abhishekanshu',
        imageURL: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/1000`,
        likesCount: 15
    }
]