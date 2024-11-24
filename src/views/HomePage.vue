<template>
  <div>
    <div class="main-content">
      <div class="posts" id="posts-container">
        <div v-for="post in posts" :key="post.post_id" class="post">
          <div class="post-header">
            <img :src="post.pfp_url" alt="User Icon" class="profile-image" />
            <div>
              <h3 class="post-author">{{ post.author_name }}</h3>
              <p class="post-date">{{ new Date(post.create_time).toLocaleDateString() }}</p>
            </div>
          </div>
          <div class="post-body">
            <img v-if="post.photo_url !== 'null'" :src="post.photo_url" alt="Post Image" class="post-image" />
            <p v-if="post.content !== 'null'" class="post-text">{{ post.content }}</p>
          </div>
          <div class="post-actions">
            <button class="like-button" @click="likePost(post.post_id)">👍</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      fetch('https://api.jsonbin.io/v3/b/67266e1ae41b4d34e44d2cde', {
        method: 'GET',
        headers: {
          'X-Access-Key': '$2a$10$zxC.9wbsVm/7i.r6SoSpZuU18QrnJA0GO5JBDK97qtohy.0xbrwqG',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          this.posts = data.record; 
        })
        .catch(error => console.error('Error fetching JSON:', error));
    },
    likePost(postId) {
      console.log(`Post ${postId} liked!`);
    },
  },
  mounted() {
    this.fetchPosts(); 
  },
};
</script>



<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 1%;
}

.post {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #e8f5e9;
}

.post-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.post-author {
  margin: 0;
  font-weight: bold;
  text-align: left
}

.post-date {
  font-size: 0.85rem;
  color: #888;
}

.post-body {
  margin-top: 10px;
}

.post-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.post-text {
  margin: 10px 0;
}

.like-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  color: #007bff;
}

.like-button:hover {
  transform: scale(1.2);
}


</style>



