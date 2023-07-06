import * as Icons from '@ant-design/icons-vue';

import { createVNode } from 'vue';

export const CustomIcon = (props: { name: string }) => {
    return createVNode((Icons as any)[props.name] || (Icons as any).UserOutlined);
}