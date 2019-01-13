import * as React from 'react';
import classNames from 'classnames/bind';

// there're no Icon-components, imports are for example
import IconAdultFemale from '../Icons/AdultFemale.tsx';
import IconAdultMale from '../Icons/AdultMale/AdultMale.tsx';
import IconChildFemale from '../Icons/ChildFemale/ChildFemale.tsx';
import IconChildMale from '../Icons/ChildMale/ChildMale.tsx';
import IconInfantFemale from '../Icons/InfantFemale/InfantFemale.tsx';
import IconInfantMale from '../Icons/InfantMale/InfantMale.tsx';

import {
    maleSelectedTheme,
    femaleSelectedTheme,
    defaultTheme,
    MALE,
    FEMALE
} from './constants';

const styles = require('./GenderSelector.css');
const cx: any = classNames.bind(styles);

enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}
enum AgeType {
    ADULT = 'adult',
    CHILD = 'child',
    INFANT = 'infant'
}

interface IProps {
    onChange: (gender: Gender) => void;
    value?: Gender | '';
    type?: AgeType;
}

interface IState {
    value?: Gender | '';
}

class GenderSelector extends React.Component<IProps, IState> {
    static defaultProps = {
        value: '',
        type: AgeType.ADULT
    };

    state: IState = { value: this.props.value };

    private handleSelect = (gender: Gender) => () => {
        this.setState({ value: gender });
    }

    private getIcon: any = (isMale: boolean) => {
        const { type } = this.props;

        switch (true) {
            case type === AgeType.ADULT:
                return isMale ? IconAdultMale : IconAdultFemale;
            case type === AgeType.CHILD:
                return isMale ? IconChildMale : IconChildFemale;
            case type === AgeType.INFANT:
                return isMale ? IconInfantMale : IconInfantFemale;
            default: return;
        }
    }; 

    private renderIcon = (isSelected: boolean, isMale: boolean) => {
        const selectedTheme = isMale ? maleSelectedTheme : femaleSelectedTheme;
        const IconComponent = this.getIcon(isMale);

        return <IconComponent
            iconSize={32}
            theme={isSelected ? selectedTheme : defaultTheme}
        />;
    }

    public render() {
        const { value } = this.state;

        return <div className={cx('root')}>
            {[MALE, FEMALE].map((gender: Gender) => {
                const isMale = gender === Gender.MALE;
                const isSelected = value === gender;

                return <button
                    key={gender}
                    className={cx('gender', { gender_selected: isSelected })}
                    onClick={this.handleSelect(gender)}
                >
                    {this.renderIcon(isSelected, isMale)}
                </button>;
            })}
        </div>;
    }
}

export default GenderSelector;
