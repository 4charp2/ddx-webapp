import { useState, useEffect } from 'react'

export const useTelegram = () => {
  const [tgViewportHeight, setTgViewportHeight] = useState(null)
  const [tgUserId, setTgUserId] = useState(null)
  const [tgUserFirstName, setTgUserFirstName] = useState(null)
  const [tgUserLastName, setTgUserLastName] = useState(null)
  const [tgUserUsername, setTgUserUsername] = useState(null)

  useEffect(() => {
    function handleTelegramScriptLoad() {
      const tg = window.Telegram.WebApp
      setTgViewportHeight(tg.viewportHeight)
      console.log(`Размер окна ${tg.viewportHeight}`)
      console.log(`Инфо ${tg.initData}`)

      // Получаем данные из строки запроса initData
      const initData = tg.initData
      const params = new URLSearchParams(initData)
      const user = JSON.parse(params.get('user'))

      if (user) {
        setTgUserId(user.id)
        setTgUserFirstName(user.first_name)
        setTgUserLastName(user.last_name)
        setTgUserUsername(user.username)
      }

      tg.expand()
    }

    const telegramScript = document.createElement('script')
    telegramScript.src = 'https://telegram.org/js/telegram-web-app.js'
    telegramScript.async = true
    telegramScript.onload = handleTelegramScriptLoad

    document.body.appendChild(telegramScript)

    return () => {
      document.body.removeChild(telegramScript)
    }
  }, [])

  return {
    tgViewportHeight,
    tgUserId,
    tgUserFirstName,
    tgUserLastName,
    tgUserUsername,
  }
}

