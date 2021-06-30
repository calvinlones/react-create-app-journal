import React from 'react'
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap'

import './style.css'

const List = ({ 
    entries,
    handleDeleteEntry
}) => (
  <div>
    <ListGroup>
      {entries.map(item => (
            <ListGroupItem className="list-elements" key={item.id}>
              <Row>
                <Col sm="10">
                    <h3>{item.journalDate}</h3> 
                    <p>{item.content}</p>
                </Col>
                <Col sm="1">
                    <Button type='submit' color='danger' onClick={() => handleDeleteEntry(item)}>
                        Delete
                    </Button>
                </Col>
              </Row>
            </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default List