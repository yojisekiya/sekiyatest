const shopify = new Shopify({
  shopName: 'sekiyatest',
  apiKey: '30c5573e9742a39375014baef4e033fd',
  password: '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'
});


shopify.metafield.create({
    "namespace": "global",
    "key": "test",
    "type": "integer",
    "value": 1,
    "owner_resource": "product",
    "owner_id": 6971273707676
  })
  .then(
    (metafield) => console.log(metafield),
    (err) => console.error(err)
  );