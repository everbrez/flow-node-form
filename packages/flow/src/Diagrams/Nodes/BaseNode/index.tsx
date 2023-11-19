import { type PropsWithChildren } from 'react';
import classnames from 'classnames';
import { type NodeProps } from 'reactflow';
import { type IBaseNodeData } from '../types';
import { PortList } from './PortList';
import css from './BaseNode.module.less';

export function BaseNode(props: PropsWithChildren<NodeProps<IBaseNodeData> & { className?: string }>) {
  const { data, selected, className } = props;
  const operatorName = data?.operatorName;

  const ports = [
    {
      type: 'source' as const,
      value: data.sourcePorts,
    },
    {
      type: 'target' as const,
      value: data.targetPorts,
    },
  ];

  return (
    <div
      className={classnames(css.node__container, {
        [css['is-selected']]: selected,
      }, className)}
    >
      <div className={css['node__operator-name']}>{operatorName}</div>
      <div className={css.node__content}>
        <div className={css.node__title}>{data.label}</div>
        {ports?.map(({ type, value }) => {
          if (!value?.length) {
            return null;
          }
          return <PortList key={type} type={type} value={value} />;
        })}
      </div>
    </div>
  );
};