import { mapFor } from '../Utils/MapFor';

export default layersContainer =>
  mapFor(0, layersContainer.getLayersCount(), i => {
    return {
      value: layersContainer.getLayerAt(i).getName(),
      label: layersContainer.getLayerAt(i).getName() || 'Base layer',
    };
  });
