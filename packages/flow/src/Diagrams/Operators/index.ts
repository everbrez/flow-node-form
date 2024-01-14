import { StateOperator, ConstStateOperator } from './StateOperator';
import { InputOperator } from './InputOperator';
import { OutputOperator } from './OutputOperator';
import { SumOperator } from './SumOperator';
import { CustomOperator } from './CustomOperator';
import { CombineOperator } from './CombineOperator';
import { TransformOperator, EffectOperator } from './TransformOperator';
import { MergeOperator } from './MergeOperator';

import { registerOperators } from './OperatorMap';

registerOperators([
  new InputOperator(),
  new OutputOperator(),
  new CustomOperator(),
  new StateOperator(),
  new ConstStateOperator(),
  new SumOperator(),
  new CombineOperator(),
  new TransformOperator(),
  new EffectOperator(),
  new MergeOperator(),
]);

export {
  OperatorMap,
  getOperatorFromNode,
  getOperatorFromOperatorType,
} from './OperatorMap';
