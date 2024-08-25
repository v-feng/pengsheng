import request from '@/utils/request';

export const postAuditPass = (payload) =>
  request({
    mockUrl: 'https://f2e.dxy.net/mock-api/client/5e785abd1efd75575ad4af02',
    url: 'audit/node/pass',
    method: 'post',
    rawRes: true,
    payload,
  });
