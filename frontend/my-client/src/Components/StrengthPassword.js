import React, { Component } from 'react'
import '../styles/passwordStrength.css';
import zxcvbn from 'zxcvbn';

class StrengthPassword extends Component {
    createPasswordLabel = (result) => {
        switch (result.score) {
            case 0:
                return '';
            case 1:
                return 'Weak';
            case 2:
                return 'Fair';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
              
        }
    }
    
// #if password strength is more than 15 characters, meter should not be displayed

    render() {
        const { password } = this.props;
        const testedResult = zxcvbn(password);
   
        return (
            
            <div className='text-white password-strength-meter'>
                <progress
                    className={`password-strength-meter-progress strength-${this.createPasswordLabel(testedResult)}`}
                    value={testedResult.score}
                    max="4"
                />

                {(
                    
                    <div className='text-center'>
                        {this.createPasswordLabel(testedResult)}
                    </div>
                )}
            </div>

        )
    }
}
export default StrengthPassword;