import react from  'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Tab1 = ({type}) => {
    return(
        <Container>
          <Row>
            <Col lg="3">
                <ModuleTypes moduleTypesArray={moduleTypesArray} setValue={this.setValue}/>
                <ExecutionTypesComponent executionTypesArray={executionTypesArray} setValue={this.setValue}/>
            </Col>
            <Col lg="3">
                <SizeOfScreen setValue={this.setValue}/>
                <SupportVideoComponent />
            </Col>
            <Col lg="2"><TypeOfControl setValue={this.setValue} typesOfControl1={typesOfControl1} typesOfControl2={typesOfControl2}/></Col>
            <Col lg="2"><ControllerComponent typesOfControllers={typesOfControllers}/></Col>
            <Col lg="2"><Sensors sensors={sensors}/></Col>
          </Row>
        </Container>
    )
}
