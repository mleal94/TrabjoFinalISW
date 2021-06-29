const { Router } = require('express');

const requestRouter = Router();
const RequestService = require('../services/requestService');

requestRouter.post('/', RequestService.createRequest);
requestRouter.post('/byRole', RequestService.getRequestByRole);
requestRouter.post('/byName', RequestService.getRequestByStudentName);
requestRouter.get('/search', RequestService.getRequests);
requestRouter.delete('/:id', RequestService.removeRequest);
requestRouter.patch('/:id', RequestService.updateRequest);

module.exports = requestRouter;
