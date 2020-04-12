import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Menu from '../../components/Menu/Menu'

class Layout extends Component {
    render () {
        return (
            <Container>
                <Row>
                    <Col>
                        <Menu />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.props.children}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Layout