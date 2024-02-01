import authorizationUtil from '@/utils/authorizationUtil';
import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { history } from 'umi';

const App: React.FC = () => {
  const { t } = useTranslation();

  const logout = () => {
    authorizationUtil.removeAll();
    history.push('/login');
  };

  const toSetting = () => {
    history.push('/setting');
  };

  const items: MenuProps['items'] = useMemo(() => {
    return [
      {
        key: '1',
        label: (
          <Button type="text" onClick={logout}>
            {t('header.logout')}
          </Button>
        ),
      },
      {
        key: '2',
        label: (
          <Button type="text" onClick={toSetting}>
            {t('header.setting')}
          </Button>
        ),
      },
    ];
  }, []);

  return (
    <>
      <Dropdown menu={{ items }} placement="bottomLeft" arrow>
        <img
          style={{ width: '50px', height: '50px', borderRadius: '25px' }}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Dropdown>
    </>
  );
};

export default App;