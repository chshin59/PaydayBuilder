import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { unstable_getServerSession as getServerSession } from 'next-auth'
import { authOptions as nextAuthOptions } from 'pages/api/auth/[...nextauth]'
import { prisma } from 'server/db/client'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createContext = async (opts?: trpcNext.CreateNextContextOptions) => {
	const req = opts?.req
	const res = opts?.res

	const session = req && res && (await getServerSession(req, res, nextAuthOptions))

	return {
		req,
		res,
		session,
		prisma
	}
}

type Context = trpc.inferAsyncReturnType<typeof createContext>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createRouter = () => trpc.router<Context>()
