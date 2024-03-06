import RangeController from './controllers/range_controller';
import RateController from './controllers/rate_controller';
import ImageZoomController from './controllers/image_zoom_controller';
import AudioController from './controllers/audio_controller';
import TableTreeController from './controllers/table-tree_controller';

application.register('range', RangeController)
application.register('rate', RateController)
application.register('image-zoom', ImageZoomController)
application.register('audio', AudioController)
application.register('table-tree', TableTreeController)
