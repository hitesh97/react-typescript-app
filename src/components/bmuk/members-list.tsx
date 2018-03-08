import * as React from 'react';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import * as recompose from 'recompose';
import { RootAction } from '../../features/root-action';
import { connect, Dispatch } from 'react-redux';

interface Props {
}

interface IMembersListState {
}

interface DispatchFromProps {
}

type PropsWithStyles = Props & DispatchFromProps & WithStyles<'list'>;

export class MembersList extends React.Component<PropsWithStyles, IMembersListState> {
    render() {
        return (<>This is members list</>);
    }
}

const styles = (theme: Theme) => ({
    root: {
      },
  });

const mapStateToProps = (state: IMembersListState): any => ({
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>): DispatchFromProps => ({
});

export default recompose.compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
  )(MembersList);
