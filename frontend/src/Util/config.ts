export default {
  API_URL:
    process.env.REACT_APP_DOCKER || process.env.NODE_ENV === 'production'
      ? 'https://prod.accqrate-erp.com/api'
      : 'http://localhost:9020/api'
}
