import React from 'react';
import { SwitchNetworkPage } from '../pages/SwitchNetworkPage';
import { AddNetworkPage } from '../pages/AddNetworkPage';

export default {
  title: 'vesting-app/Pages',
  parameters: {
    layout: 'centered',
  },
};

export const SwitchNetwork = () => <SwitchNetworkPage />;

export const AddNetwork = () => <AddNetworkPage />;
