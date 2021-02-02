import { makeStyles } from '@material-ui/core/styles';
import { CenterFocusStrong, CenterFocusWeakRounded } from '@material-ui/icons';

export function useStyles() {
  const u = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },

    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },

    paper2: {
      marginTop: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    avatar: {
      margin: theme.spacing(1),
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
  }));

  return u();
}
