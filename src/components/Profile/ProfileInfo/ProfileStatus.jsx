import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status:this.props.status
    }

    activateMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onChangeStatus = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <span>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateMode}>{this.props.status || '--------'}</span>
                    </div>
                    :
                    <div>
                    <span><input onChange={this.onChangeStatus} onBlur={this.deActivateMode} autoFocus={true}
                                 value={this.state.status}/></span>
                    </div>
                }
            </span>

        );
    }
}

export default ProfileStatus;