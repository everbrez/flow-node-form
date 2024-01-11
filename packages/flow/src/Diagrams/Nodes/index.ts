import { StateNode } from './StateNode';
import { StreamOperatorNode } from './StreamOperatorNode';
import { CustomNode } from './CustomNode';
import { ContainerNode } from './ContainerNode';
import { DoNode } from './DoNode';
import { Node } from './Node';
import { NodeTypeEnum } from './NodeTypeEnum';

export const nodeTypes: Record<string, any> = {
  [NodeTypeEnum.StateNode]: StateNode,
  [NodeTypeEnum.StreamOperatorNode]: StreamOperatorNode,
  [NodeTypeEnum.CustomNode]: CustomNode,
  [NodeTypeEnum.ContainerNode]: ContainerNode,
  [NodeTypeEnum.DoNode]: DoNode,
  [NodeTypeEnum.Node]: Node,
};
