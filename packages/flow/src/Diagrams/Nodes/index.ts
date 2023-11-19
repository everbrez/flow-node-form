// import { OperatorNode } from './OperatorNode';
import { StateNode } from './StateNode';
import { InputNode } from './InputNode';
import { OutputNode } from './OutputNode';
import { StreamOperatorNode } from './StreamOperatorNode';
import { NodeTypeEnum } from './NodeTypeEnum';

export const nodeTypes: Record<string, any> = {
  // OperatorNode,
  [NodeTypeEnum.StateNode]: StateNode,
  [NodeTypeEnum.InputNode]: InputNode,
  [NodeTypeEnum.OutputNode]: OutputNode,
  [NodeTypeEnum.StreamOperatorNode]: StreamOperatorNode,
};
