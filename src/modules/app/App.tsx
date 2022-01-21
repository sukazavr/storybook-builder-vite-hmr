import {FC} from 'react';

import {Button} from "../../Button/Button";

export const App: FC = () => {
  return (
    <div style={{ display: 'grid', height: '100vh' }}>
      {Object.entries(import.meta.env)
        .map(([key, val]) => (
          <Button key={key} label={`${key}: ${JSON.stringify(val)}`}/>
        ))}
    </div>
  );
};
