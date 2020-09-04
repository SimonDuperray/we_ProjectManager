from win32com.client import Dispatch
speak = Dispatch("SAPI.SpVoice")
speak.Speak('Bonsoir à tous!')