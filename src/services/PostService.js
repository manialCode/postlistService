import { ref } from "vue";
class PostService {
    posts
    post

    constructor() {
        this.posts = ref([]);
        this.post = ref({})
    }

    getPosts() { return this.posts }
    getPost() { return this.post }

    async fetchAll() {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const res = await fetch(url)
            const json = res.json()
            this.posts.value = await json
        } catch (error) {
            console.log(error);
        }
    }
    async fetchById(id) {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const res = await fetch(url)
            const json = res.json()
            this.post.value = await json
        } catch (error) {
            console.log(error);
        }
    }
}

export default PostService;