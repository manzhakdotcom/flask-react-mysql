import React, {Component} from 'react';
import DataTu from "./DataTu";
import DataTs from "./DataTs";
import DataTi from "./DataTi";

class RenderData extends Component {

    render() {
        let renderData = null;
        if (this.props.type === 'tu') {
            renderData = (
                <DataTu
                    data={this.props.data}
                />
            );
        }

        if (this.props.type === 'ts') {
            renderData = (
                <DataTs
                    data={this.props.data}
                />
            );
        }

        if (this.props.type === 'ti') {
            renderData = (
                <DataTi
                    data={this.props.data}
                />
            );
        }

        return (
            <>
                {renderData}
            </>
        );
    }
}

export default RenderData;