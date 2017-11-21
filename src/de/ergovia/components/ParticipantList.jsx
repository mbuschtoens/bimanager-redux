import React from 'react'
import TextField from 'material-ui/TextField';
import Participant from '../components/Participant';
import moment from 'moment'
const fmt = 'YYYY-MM-DD';

class ParticipantList extends React.Component {

    constructor(props) {
        super(props);
        this.styles = {
            grid: {
                gridArea: 'participants',
            }
        };
    }

    handleChange = name => event => {
        console.log(event.target.value);
        this.props[name](event.target.value);
    };


    render() {
        return (
            <div>
                <TextField id="rangeFrom" type="date" label="Von" onChange={this.handleChange('changeRangeStart')} value={moment(this.props.range.start).format(fmt)} InputLabelProps={{shrink: true}}/>
                <TextField id="rangeFrom" type="date" label="Bis" onChange={this.handleChange('changeRangeEnd')} value={moment(this.props.range.end).format(fmt)} InputLabelProps={{shrink: true}}/>
                <ul style={this.styles}>
                    {this.props.participants.map(p => <Participant key={p.id} data={p} onClick={this.props.onClick}/>)}
                </ul>
            </div>


        )
    }

}

export default ParticipantList