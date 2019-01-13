import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    text,
    boolean
} from '@storybook/addon-knobs';
import {
    action
} from '@storybook/addon-actions';
import RadioIsland from './RadioIsland';
import TariffStatements from '../../molecules/TariffBlock/TariffStatements';
import componentInfoDecorator, { ACTUAL } from '../../../../../.storybook/componentInfoDecorator.jsx';

const firstList = ['Обмен со сборами', 'Обмен до вылета со сборами', 'Обмен после вылета со сборами', 'Багаж платный'];
const getChecked = () => boolean('checked', true);

const componentInfo = componentInfoDecorator({
    name: 'RadioIsland',
    version: '0.0.1',
    description: 'Компонент для отображения радио острова с информацией о тарифе и цене',
    actual: ACTUAL.ACTUAL,
    design: 'https://zpl.io/VQ0Bg52'
});

storiesOf('Atoms.RadioIsland', module)
    .addDecorator(componentInfo)
    .addWithInfo(
        'RadioIsland unchecked',
        () => (
            <RadioIsland
                checked={false}
                onChange={action('onChange')}
            >
                <TariffStatements
                    checked={false}
                    title={text('Заголовок:', 'Базовый эконом')}
                    list={firstList}
                    price={text('Цена:', '64943')}
                />
            </RadioIsland>
        )
    )
    .addWithInfo(
        'RadioIsland(mobile)',
        'макет mobile - https://zpl.io/V4Jnwzb',
        () => (
            <div style={{ width: '288px' }}>
                <RadioIsland
                    checked={getChecked()}
                    onChange={action('onChange')}
                >
                    <TariffStatements
                        checked={getChecked()}
                        title={text('Заголовок:', 'Базовый эконом')}
                        list={firstList}
                        price={text('Цена:', '64943')}
                    />
                </RadioIsland>
            </div>
        )
    )
    .addWithInfo(
        'RadioIsland(tablet)',
        'макет tablet - https://zpl.io/aMmx6Ka',
        () => (
            <div style={{ width: '510px' }}>
                <RadioIsland
                    checked={getChecked()}
                    onChange={action('onChange')}
                >
                    <TariffStatements
                        checked={getChecked()}
                        title={text('Заголовок:', 'Базовый эконом')}
                        list={firstList}
                        price={text('Цена:', '64943')}
                    />
                </RadioIsland>
            </div>
        )
    )
    .addWithInfo(
        'RadioIsland(desktop)',
        'макет desktop - https://zpl.io/VQ0Bg52',
        () => (
            <div style={{ width: '267px' }}>
                <RadioIsland
                    checked={getChecked()}
                    onChange={action('onChange')}
                >
                    <TariffStatements
                        checked={getChecked()}
                        title={text('Заголовок:', 'Базовый эконом')}
                        list={firstList}
                        price={text('Цена:', '64943')}
                    />
                </RadioIsland>
            </div>
        )
    );
