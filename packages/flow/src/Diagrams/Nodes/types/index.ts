import { v4 as uuid } from 'uuid';

export class NodePort {
  id: string;
  type: string;
  label: string = '';
  isConnectable?: boolean;
  children?: NodePort[];

  constructor(data: Partial<NodePort>) {
    Object.assign(this, data);
    this.id ??= uuid();
    this.type ??= 'unknown port type';
  }
}

export interface IBaseNodeData {
  operatorName: string;
  label?: string;
  sourcePorts: NodePort[];
  targetPorts: NodePort[];
}

export enum StateNodeValueTypeEnum {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Object = 'object',
}

export type IStateNodeData = IBaseNodeData & {
  valueType: StateNodeValueTypeEnum;
  value: string | number | boolean | undefined;
};

export type IInputNodeData = IBaseNodeData;

export type IOutputNodeData = IBaseNodeData;

export type IStreamOperatorNodeData = IBaseNodeData & {
  allowAddTargetPort?: boolean;
};

export enum StateNodePortTypeEnum {
  State = 'State',
  UpdateHanlder = 'UpdateHanlder',
}

export enum InputNodePortTypeEnum {
  Event = 'Event',
  State = 'State',
  LifeCycle = 'LifeCycle',
}

export enum OutputNodePortTypeEnum {
  State = 'State',
  Event = 'Event',
}
