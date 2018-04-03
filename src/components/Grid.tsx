import * as React from 'react'

interface GridColumnProps {
  children?: React.ReactNode
}
export const GridColumn = (props: GridColumnProps): JSX.Element => {
  return (
    <div>{props.children}</div>
  )
}

interface GridProps {
  children?: React.ReactNode,
  maxWidth?: number,
  columns?: 3 | 4
  gapless?: boolean
}
interface GridState {
  viewport: 'mobile' | 'tablet' | 'desktop'
}

const viewportForWidth = (width: number): 'mobile' | 'tablet' | 'desktop' => {
  if (width > 970) {
    return 'desktop'
  } else if (width > 575) {
    return 'tablet'
  } else {
    return 'mobile'
  }
}

export class Grid extends React.Component<GridProps, GridState> {
  constructor(props: GridProps) {
    super(props)

    this.state = {
      viewport: viewportForWidth(window.innerHeight)
    }
  }

  handleResize = () => {
    const width = window.innerWidth
    const viewport = viewportForWidth(width)
    this.setState({ viewport })
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }
  componentWillMount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          maxWidth: this.props.maxWidth,
          display: 'grid',
          gridTemplateColumns: `repeat(${this._numColumns}, 1fr)`,
          gridColumnGap: this.props.gapless === true ? '0' : '1rem',
          gridRowGap: this.props.gapless === true ? '0' : '1rem',
          position: 'relative',
          ...this._maxWidthStyles
        }}
      >
        {this.props.children}
      </div>
    )
  }

  private get _maxWidthStyles(): { [key: string]: string } {
    let styles = { }
    if ( this.props.maxWidth ) {
      styles = {
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }
    return styles
  }

  private get _numColumns(): 1 | 2 | 3 | 4 {
    if ( this.props.columns === 3) {
      switch ( this.state.viewport ) {
        case 'desktop': return 3
        case 'tablet': return 2
        default: return 1
      }
    }
    switch ( this.state.viewport ) {
      case 'desktop': return 4
      case 'tablet' : return 2
      default:
        return 1
    }
  }
}