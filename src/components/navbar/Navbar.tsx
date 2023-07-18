
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>admin</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className='icon'/>
        <img src="app.svg" alt="" className='icon'/>
        <img src="expand.svg" alt="" className='icon'/>
        <div className="notification">
            <img src="notifications.svg" alt="" />
            <span>1</span>
        </div>
        <div className="user">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgSFRIYGBgaGBoYHBoZGBkaGhoaGBgZGRkYGhgcIS4lHCEsIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHDQkISE0NDU0MTQ0PzQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPcAzAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIGAwUHBAj/xABBEAACAQIDBAcFBgMIAgMAAAABAgADEQQSIQUxQVEGEyJhcYGRBzKhsfBCUnKCksFiotEUI1OywtLh8SQzc4Oj/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAgEQEBAQEAAgMBAAMAAAAAAAAAAQIRITEDEkFRImFx/9oADAMBAAIRAxEAPwC7RwhAI4QgEcUcAjiEcAhNdtnbNDDJnquAT7q/bcjgq8fHcOM5dtrpnjKxID9WlzZU7LW3dp73PwmW8bJ11faG0qFAZqtRU7ie0fBd58hNQemmz7gdfv8A4Knoezp5zjTM7H5kj9zqd/CY2bL4TPsr6x3bCdI8HUyhMShLGwUtla53DK1iD85tQb6ifN7Vtd3zm02V0gxWHYNSrPpvRiWQjllP7WMdZ9XfISrdGemVLFHq2Xq6m8KSCG94kq3HQDTfr5y0ykiEIQFCOKAoRxQCEIQCEIQFCKOA4QhAcIQgOanb+26eGTUg1GuEp31Y/eI4IOJ8hckCevauPShSes/uoLn5AeZIE47tHaVTEFqzEAu7NYC2VQAEW9zfTvPIaSdXis56y4yuajvUdy7ne7cCTewB0A5KN01QoM7HgO65Y9w0sPrWZaaFVzHUbrDT6HO02GDwWLrgJSpZVt727ieANhOdrrM9eBMCW0uBf7x1vyNuP1eeLEYXKxBP+nXzl7pdDcWyhXYNbwB7twnlxvQmuo7Nm7r7u4XmfZX0Uc014qTz1/6kFReFx5G4lpbolijoKdgB8fCeDG9HcWguyWHcP6TftGXF/jT9tLMrWINwRvBHETrXQvpiMU3UuMtQJcAA2YLbM1+dzu4ATkro63Vr7viNZHBY+rRqCrTYqw4jcRcEi3I2nTLlqPo6E0HRHpCuMpZ8pVlsH5Zra5ePL1475v5SBCEICijigEIQgEUIQFHFHAI4QgEcIQKj7SQDhlv/AIgsNNTlNtTuG/4TnpQhVHDNa2/S1r+t/QTqvTDBiphjcaoysPWx+BMo+AwSs6X1UHdw7/lOW7yu3xzsbTo70YzqrOLi4PhfUm3nadBwOz6aKFVQB3SGBQKoAHCe5WnKO1vjwDTmOpTEyMxkGMqpjzPSE8OKw6kWtPfUvPFiKhkWrkUvbWxKb3uuvOc+2zs0I9hynWNoMLEznvSOnfX63zcavWfJmcT9meNNPGCnwqAqdbagFh47jbxnaJwvoLRZtoULXFmZ78gqMf8AjzndJ6Y8mhCEJrChHFAUIQgKEcIChCEBwhCA44o4Hk2rTD0Kq80f4KSPlKh0KwwftsLZQLecuuJS6Mt7ZlYDzBE55hto1MP/AHeH7Zy+4RcnLpv3A3Fpz3Ouvx3jo9NwNSQANJI7SoLq1RB4sJR8DthcQKjuzoiNkPYysWCqzlgWIUAta1vs3vrYarHUaDsx6xgOAZ0Q2tvyqAdbE6ic+Sfrr22enVaGPoP7lRG8CDJuV4Tkmzdn9rNh8TUpuNN6up9VN/WZ9p9KdpYRxhyiYh2QVFZabAhczKcyKf4d+m8TZ58Ms+vmul1qiiafHbSwwFmrIDyLgH0nPT0gxeKQM7oim4sisToSCQS3Z3d81TbPpm5as9uZZBfwBFz4zLn+qmvHhesXXpNdRUFzu1lV2pRzIea/KeKlsumwtTxDg8jlYeWgv5GYsMzq3UPWU2LBuywKKUzK5c9nW9rcImfPg1rx5jZ+zKh/5xOnZpVD36lF09TOtykdAtl06VV3Ry4aktySptdzaxUW1y/y98vE7R5dXyUIQlMEUcIChCEBQhCAo4o4BHFHAI4o4GPq3LrZrLZrgga+7b95psLsxExdYhQFKIVFt1xY+Aup9JYcP701VRRTri5/9lM2J5rUdiPSpPPqcterN7mf6amrsoddXpC4DinXG7ivVOF8DSQ/nEgmw6QpmkVqgdu+TMGbOMrhnXUgjf6bry1YjZ1OrkZgwdLlXRmR1zWuAynVTYXU3U2FwbCeY7MqqdMXX81wxt/+Mydl7Krss5Z1rNlbLytmNPKoB1aw0uSSe7U75LozQFR6+0SNKn91R7qFM2DD8bXbwtPZU2Q7rkqYms6neHNNRbllpImYdzXE29NFVMiiyhQABuAAsAJs8F8uQ1MEExVbD20LM6a27Lm5A8GJHmJtjshGRUYOChUiw0OUsylwvvkFmN2vqZLbeFR692JVi3ZcEgqfEcO7cZusFg8QqgGuzciyUz8VVZP2v5VfWerOqlX2Oc4ZMwOn2SBpoN/dPNSwl1ZzvdnPkvYU+BCg/ml3xeGcjtVnA4hFRLjkWKlgPwkHvlf2oVSwUWVRYDkBuEz7MufDTbKeolN6nWFQzF8qkqM265tYm3wnVNn1c9KnUvfMiNfmSoJM5NgnLA07e+hyEfxFhl8bj5TrWAw3V00p/cRV/SADOvx97XL5ZJmf1nijinZ5xCEIChHCAoQhAUIQgOEIQCOKOBJN48ZrelVEIiVBpkcc/tA317yFmwnh25Sz0H4kLmF9bFdb2nPeeumNc8Vt8G/ZEx7RxwQX3ncBxJ4CeDAYnsoNd3HjcaeM122MaqPmc7rBeQLXu3jp85xt8PRmTvluabsFzvvOpA1tyGm+YaO3qDIWN1F7DOCp8QDwmkq7Sp1bD+0poNQrqSL3G4bjbnMGJpIXBFVMmVgbsNDYWvfWTLxf17541G1ds4d3ezjTXW9yOYJ0PlN/0ZxzMi5uQ8tJUtp7NoghkqJfjrxvfQnzkcDtY0nCK6ufu5u4cPPu4R/xttnuOiY9lC+U5x0mxJCm3HQS2YnH5qN9xO7z3Sm1aQrVEpm4DOqXG/U6kX+tJufNRq8jY9FtmB6yMxvlyWG6wSxa/O5BPnOlGa3ZWxadA3DFjawJsLc93GbKejGbJ5eb5NTV8ehCEJbmUIQgEIQgEUcUBRxRwCEcIBCEIBGRfSKECtpierdqTG5SxsOI1yn0v3C0W1RSrKjN94AgjgdCbcZ6ek+x3rKKlLSogNtbZh925lNweOa6o9/e3FiNQdRbgQR6zzbzyvVjXiL1g9hUaT9fh6aKzCzJYZSeJA3Kedt82j4gqtmpKe0rchdcutrHXT5TxbKxGdLaiw+vjNftDaT02YE3Frjutr+0yV09+514tv1XdnCUkGYOL5BcZkVM2Y8RlP6u7XTbP2JQoLfTMW1Y6km24nlr8ZuHxVSrop3Egndext5SvbexmQZCd1vI8Sfr9pnmq1qSeJxm2/tBSQi7hy8NRF0Mw5rYnrAezT7RPewKgbteMptXFux462A8dLTq3QHCZMIpI7TszMeJN8oHkBadMZ5Xm3rsWWEITu4FCEIBFHCAoQhAIo4QFHAQgEIQgEIQgEIQgNd8ofTXZIp1BiksAzXIGlm4nlrxl9C6E3tYX872A8z+8w47DrUQqw0InHft2+P0q2xq5YXU8edtbf8AV/KbnEIj2zW1G4nTny1ldTZtbDHMgDINbcRbUm1tfjML7eC2ZgwsxW1hby7v6cZx47zTZYxEpLZWy3vyI1O/4znvSDFFidd58eNx8b/Gb3be3VcEDeRuNuQI08+PKVvD4Yu2dhxuBwHgOMrM55rNX7eIeysJb+8Ya8By7/GdJ6O9IcOi0sNUYo75srN7jsXJKhuDC40a18wsTe0ou7gSb2AGpJOgAHEkzP0v2Q6YWkGANRXZ342zr2lB5AKo78s6Y7ddcvkkmeOvEQlC6BdMkemuFxNTLVXso7nSou5VLH7Y3a+9YbzeX2dnARRwgKEcUAijhAUI4oBCEcBQjhAUI4QFPPtLH06FN6zmyqL97HcqrfeSdBPDtbpJhMNcPUBcD/1p2n7gQNF/Nacv6Q7fq4ljUc2C3yUweyn+5rb249wsJWc9Za6JgNo1BgDjKvvV640B0ROsWhTRf4R2m78xPGWSg1xKz0jwLJsrCImoprhy/O2UHN+sqfWbzZVbMinmBPNu/wCT1Yn+HUq1McriV/bey6YBZgCTe2m/v9Ja3W81ONweYgnhukaXnnVAfYwY5iPLQfCek7MyLuMt64C53X7ptaOz0pkOwzPvA3hO/wDF8oznWqa1nMV7o90Z6s9fUH94R2F/wwd5/GR6Dzms6dELQqtwCimve9U5fgmczodKmSMxnKfaTjczJRX3BUZyfvOVKi3gpP6p6s5k8R5daur2ucnSXjoZ04bDjqcSzPSsMjAZ3pm+7fdk7tSLC2m6kVhrGqXBl8Q+htm7SoYhc9CqjrxynVe5l3qe4gT1T53wmIqIy1EdkcbmRirDuuPlOg9HvaEy2p4xcw4VUXX/AOxBv8V/Sd8y5OujwmHB4unVQVKVRXQ/aUgjwPI9x1noktQhHCAoQhAIQkatRUUu7KqjezEADxJgSnnxuMp0U6yrUVF5sd/cBvY9wlS2/wBOkS9PDAO241GHYH4V3t4mw8ZQMftGrWfPVqM7czwHIAaKO4aSpm/rLV+2l7Qqa3FCkX/ic5F8Qo7RHjaVHaXSjGVr5qzAH7KdhQOXZ1P5iZpLxCdJmRnUlb5/Gbfotsf+2Yqnhzqnv1P/AI0ILX8SVTxYTTgTrvso2Pkw74phZq7WXupoSBv+82c94CRq8hFt2xhFqUTTOisChI+zmFgR8JWOi9Q5MjaMpKkcipsR6gy27SxapkQ2s75CT9kEe965fWVLDYdqeLrIRa759NxzgOT6lp4vlnmV6/hvc2LC4MwhGc5QLnlPUNxPADX+kzU8Sqp2Bre1+f1eM5+ydb+rEEWiOBc+i+EWFoFiXbibyFNCzXM2K0yRYaCd5JPTjbbe148e5KlV4C5PdYzkntFVUakgGrBqmu8IxCoTyLFHb9O6dgakH0t2Bv8A4+4/w/Pw38L6ebQ6/HV3Buqv1a+FPsG3cWVj5y8xNVh1gkyETz16JOt9OIlCdMg3A1t+/CZkbhI0kAFgJMibEs+Cx1Wg+elUZG5qbXtwP3h3G4l22N7R3FkxNPOP8RLBhu1ZD2W8iPAyikXmIrMs63rvOzttYXEAGlXR7/ZvZx4o1mHpNgRPne3CbjZ3SfGYdStOuwU2AVsrhbfdDg5eVh3yblvXb4pUug/SxsXno1QoqoucFRYOlwCcvBgSu7Q5hyMt0mzjSvxM5H0k26+Jqs9z1SErTXh3uR94/DdOjdKcX1WEqvfUpkHi/Y/cnynGlPZHn8SZWJ+pqDG8VoRidGBVk8oElEYEsNhmqOlJPeqOqLx1dgoJHIEz6QwGFSkiUkFkRFRRyVQFHwE4v7NNn9Zjkcjs0laofG2RR6tf8s7RWFQiyELzJFyB3C9r+M56vlUanHJnxK63FNdBvu1wx+FvSR23SJy1ALOF8yFN2X0Nx4TbYbCqm65J1LHeSd5MWJpZig5MSfAA/wBROVz2X/bpnXLL/HhwdNnRCBobnu3n10E9L0QBluL77DhPQ7ncPK0aIFFzvmycjNXt6xYanbQi3Lv5zO5B04bj39314c5jD+7lGp01Hugbz9cxJ24cBKS8m1cYKFGrW/w6bv4lVJA8yAJ83VGJJJNzz/edt9p2N6vAsgOtV0TyBLt8Et5ziLS8+k1jI1vJjlBRG+g10lMYUft5eFrnumeYMKtwWP2jfy4T0WiBLGw7oREzQjumKqOHKZRz5fQmBzMo2vRLaX9nxlGoTZc4RvwP2DfwzBvyzvFp82sgM710Ox5xGCoVWN2KZWJ3lqZNNifErfznOqjR+0uoRh6ac6l/0o3+6cyQ9kefzl99p2Ju1KkDuVnP5yFH+Q+soKbvM/IS8+mX2JJRIiZUEpiRiMYiaB1T2R4HLQq4gjV3CD8KD/czek6DNH0MwXU4KhTtY5A5/E/bP+abycr7WBI1L7vrwk4rdod1/lMBSQe96SNTU2mS1pjA1gSJkTGYoa5d7YcZ28PQB91XqMPxkIh/kf1nMjLX7RsZ1mPrcRTy0x+RRm/nLyq2nSekVJBPPjDey/ePw4z1gaTx0xmctwXQfvNrHqVbC0DFFeaHImOQqmwmBk6fXD/mYHmQHsjwB9dZB5gw5pcejHT18JQGH6lKgDMwJYggMc1u/Uk375TTMesmqdE9ox/8rwpoPix/cypDd6y7+0rDEVkqcHp280Zr/B1lJG4fXGXn0y+ytMqiY1EyiawCZMLhzUqJS4u6J+tgv7yAm+6BYXrMfRFtELOfyKbH9WWL6bHdEQABRuAAHlJRQnFZiSUSKyawxB98iY2MQgAidwoLMbAAk9wGpMc0fTTF9VgcQ97EpkHjUITT9ZPlEa4PtDEmpUeo2+o7OfF2LH5zAojffACdnNHEvlQnu0mLC08qj1PnIYk5mVBw7R/aeuZ+iBMV4zFaAz4TzY1rKZ6Lzw4tt3jMrY9dpiYydA3W8xMYYxvvkZkeYplU7j06wYqYV2+1TIcHuuFYeFjfyE5KeH1xnXumm0adHCuH1NRTTVeJLAi/gBr5DnORPNx6ZUVmUbjMazIN0ph3l69keFzYmtVI9ymFB73a/wDolEnVPZDh7YetU4tVy37kQfuxk69NjoMUITmtJZISBNhJG9t0MYzHEBHDSlD9rOMy4elRB1eoXI5rTU3/AJnT0l8nJPaxii2JSmNyUQfzOzE/yhJWfbKoUDoLwE8+0nsuUb2Nv6y74iGDBnMzOeJ+E9lxIUEAUAAekZeIIkdxja8izjnIFwePpAkW43murtexnrqXsdD8vnPHiOEjTY2FA2p+MhTG+IN2FEyILCU15gYWg41kM0kX32jY81MT1YPZpKE/MwDufio/LK03DwmfauKFSrUqX993f9Tkj5zAeHhOknIkpkaY13zK2+BFjpOz+zCnlwCH7z1G/nI+QnFnOk7v0GpZMDQX+AH9Wv7yNKysMUISFJW+vERkWH1wFoxE0MRgYi0QhpzhXTyvnx+IN9zhB+RFQ/FTO6z522vX6yvVqA3z1aj/AKnZh85WU6eJOc1mIfPUtwXTz4/XdNhiGyqW5Ca3Arx4mVf4yPZbvP14QCDlfx1+cZ3wUzWIjuA9I3NhIqdSIqzTBhqnSePEHdPS5nmOrjxk1Ue1uA5AD0mUCYUYasTF1pO4ShlYSHVCMMTwkTA9NUWMyg6DwEcJSUqe8fW6O8IQMdSfROwqeXD005U1H8ohCc9KjYwEISVMkg5hCGIASVoQhrzY+vkpVKn3Ed/0qW/afOlhpflCEvKdNdtZ9AvM39IsMLCEI/az8ZjGIQmsQTfpykKjQhCnnczzg9qEJNI9FPUjlPfCEqMqNaoFE1hqE6whMrY//9k=" alt="" />
            <span>john</span>
        </div>
        <img src="settings.svg" alt="" className='icon'/>
      </div>
    </div>
  )
}

export default Navbar
