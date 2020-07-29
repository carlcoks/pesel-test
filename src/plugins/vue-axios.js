import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://dog.ceo/api',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json'
  }
})

Vue.axios = instance
