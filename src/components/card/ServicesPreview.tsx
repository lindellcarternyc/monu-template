import * as React from 'react'

import { ServiceCard, ServiceCardProps } from './ServiceCard'
import { Container } from '../container'
import { Grid, GridColumn } from '../Grid'

const services: ServiceCardProps[] = [
  {
    icon: 'pencil-alt',
    title: 'Web Design',
    action: 'View Services',
    // tslint:disable-next-line:max-line-length
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididLorem ipsum dolor sit amet, consectetur adipisicing.'
  },
  {
    icon: 'desktop',
    title: 'Web Development',
    action: 'View Services',
    // tslint:disable-next-line:max-line-length
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididLorem ipsum dolor sit amet, consectetur adipisicing.'
  },
  {
    icon: 'chart-line',
    title: 'Digital Marketing',
    action: 'View Services',
    // tslint:disable-next-line:max-line-length
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididLorem ipsum dolor sit amet, consectetur adipisicing.'
  },
  {
    icon: 'headphones',
    title: 'Online Consulting',
    action: 'View Services',
    // tslint:disable-next-line:max-line-length
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididLorem ipsum dolor sit amet, consectetur adipisicing.'
  }
]
export const ServicesPreview = (): JSX.Element => {
  return (
    <Container>
      <Grid>
        {services.map(service => {
          return (
            <GridColumn key={service.title}>
              <ServiceCard {...service} />
            </GridColumn>
          )
        })}
      </Grid>
    </Container>
  )
}