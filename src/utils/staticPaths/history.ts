const historyIds = ['5f6fb2cfdcfdf403df37971e', '5f6fb2efdcfdf403df37971f'];

export const createHistoryStaticPaths = () =>
  historyIds.map((id) => ({ params: { id } }));
