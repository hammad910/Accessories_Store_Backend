module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys:["Cbqg1jLRloPt7KX/+treYw==", "Q4e545mr+zdlBDHJs6HxZw==", "EuVCoiIzvo/tWNbDp8q+qg==", "cffuhyuSIs6GoCCU2r21uQ=="],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  telemetry: {
    enabled: true,
  },
});
