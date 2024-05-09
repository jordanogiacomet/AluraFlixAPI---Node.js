const VideoService = require('../services/VideoService');
const videoService = new VideoService();

class VideoController {
  static async cadastrarVideo(req, res) {
    const { titulo, descricao, url } = req.body;
    try {
      const video = await videoService
        .cadastrarVideo({ titulo, descricao, url });
      return res.status(201).json(video);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    };
  };
};