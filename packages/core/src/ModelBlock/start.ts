import { ModelBlock } from './ModelBlock';
import { InputOutputInterface, ModelTemplate } from './ModelTemplate';

export function start<
  I extends InputOutputInterface,
  O extends InputOutputInterface
>(template: ModelTemplate<I, O>, input?: I) {
  const block = new ModelBlock({ template, input });
  block.mount();
  return block;
}
