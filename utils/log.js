const logType = {
  app: true,
  store: true,
  component: true,
  script: true,
  request: true,
  storyblok: true,
  warning: true,
  error: true,
}

const showLogs = (process.env.NUXT_ENV_SHOW_LOGS ? true : false);

const setStyle = (type) => {

  if(type === 'storyblok') {
    return 'background-color: #0AB3AF; color: white;'
  }

  //yellow
  if(type === 'store') {
    return 'background-color: #ffd23f; color: black;'
  }

  //green
  if(type === 'component') {
    return 'background-color: #33e617;'
  }

  //pink
  if(type === 'script') {
    return 'background-color: #e98afc; font-weight: 600'
  }

  //orange
  if(type === 'app') {
    return 'background-color: #f46036; font-weight: 600; color: white'
  }

  //blue
  if(type === 'request') {
    return 'background-color: #023893; font-weight: 600; color: white'
  }

  //red
  if(type === 'auth') {
    return 'background-color: #db0000; font-weight: 600; color: white'
  }

  //purple
  if(type === 'worker') {
    return 'background-color: #7802d8; font-weight: 600; color: white'
  }

}

export default ({
  type,
  ref = '',
  time = true,
  mute = false,
} = {}) => {

  if(!type) {
    console.warn('Cannot initialise [log] without a [type] prop')
  } else if(!ref) {
    console.warn('Cannot initialise [log] without a [ref] prop')
  } else {

    return {

      group: (body = '') => {
        if(showLogs && logType[type] && !mute) {
          console.group(
            '%c %s',
            setStyle(type),
            `[${ref.toUpperCase()}] | ${body}`
          );
          if(time) {
            console.time(`${body} completed in`)
          };
        }
      },

      groupEnd: (body = '') => {
        if(showLogs && logType[type] && !mute) {
          console.groupEnd(
            '%c %s',
            setStyle(type),
            `[${ref.toUpperCase()}] | ${body}`
          )
          if(time) {
            console.timeEnd(`${body} completed in`)
          }
        }
      },

      line: (body, method = 'task') => {
        let symbol = ''
        if (showLogs && logType[type] && !mute) {
          if(method === 'load') {symbol = '⌛'};
          if(method === 'info') {symbol = '💡'}
          if(method === 'task') {symbol = '🛠'};
          if(method === 'done') {symbol = '✔️'};
          if(method === 'store') {symbol = '📦'};
          if(method === 'issue') {symbol = '❌'};
          if(method === 'alert') {symbol = '⚠'}

          if(method === 'return') {
            console.log(body)
          } else {
            console.log(`${symbol} ${body}`)
          }
        }
      },

      warn: (body) => {
        if(showLogs && logType.warning) {
          console.warn(`[${ref.toUpperCase()}] - ${body}`)
        }
      },

      error: (err) => {
        if(showLogs && logType.error) {
          if(err.response) {
            let error = err.response;
            console.error(`[${error.config.method.toUpperCase()}] request to ${error.config.url} failed with status ${error.status} (${error.statusText}) and the message:`, error.data);
          } else {
            console.error(err);
          }

        }
      }

    }

  }

}