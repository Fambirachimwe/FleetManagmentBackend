module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bd6888fa65265014cf9de80eb05d5417'),
  },
});
