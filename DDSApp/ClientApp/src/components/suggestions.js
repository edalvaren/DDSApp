

import React from 'react';
import {MenuItem} from '@material-ui/core';


export const SearchSuggestions = [
  { label: 'spiral' },
  { label: 'drum surging' },
  { label: 'tenting' },
  { label: 'broken belt' },
  { label: 'broken models' },
  { label: 'bad performance' },
  { label: 'high tension' },
  { label: 'skipping' },
  { label: 'slack' },
  { label: 'new motor' },
  { label: 'Intralox Intelligence' },
  { label: 'Load Cell' },
  { label: 'Drum VFD' },
  { label: 'Take Up VFD' },
  { label: 'Gen 2 Controls' },
  { label: 'Startup Report' },
  { label: 'Troubleshoot Report' },
  { label: 'OSG' },
  { label: 'Health Check' },
  { label: 'Training Presentation' },
  { label: 'DirectDrive' },
  { label: 'Direct Drive' },
  { label: 'Side Drive' },
  { label: 'Stacker' },
  { label: 'Inner Edge' },
  { label: 'Tier Locking' },
  { label:  'Sideguards' },
  { label: 'airflow' },
  { label: 'Retrofit' },
  { label: 'system crashed' },
  { label: 'vfd parameters' },
  { label: 'powerflex 70' },
  { label: 'abb vfd' },
  { label:  'design guidelines'},
];

export function renderSuggestion({ suggestion, index, itemProps, highlightedIndex, selectedItem }) {
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

    return (
        <MenuItem
            {...itemProps}
            key={suggestion.label}
            selected={isHighlighted}
            component="div"
            style={{
                fontWeight: isSelected ? 500 : 400,
            }}
        >
            {suggestion.label}
        </MenuItem>
    );
}