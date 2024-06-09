import React from 'react'

const ReportData = () => {
  return (
    <div >
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-12 mr-12 mt-2">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Driver ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Driver name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        User ID
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Ride Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Message</span>
                    </th>
                </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    000001
                </th>
                <td class="px-6 py-4">
                    John Frith
                </td>
                <td class="px-6 py-4">
                    IDTB080027
                </td>
                <td class="px-6 py-4">
                    12/20/2024
                </td>
                
                <td class="px-6 py-4">
                    Good 
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                002901
                </th>
                <td class="px-6 py-4">
                    Ben White
                </td>
                <td class="px-6 py-4">
                    IDTB080092
                </td>
                <td class="px-6 py-4">
                12/20/2024
                </td>
                <td class="px-6 py-4">
                Best
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                002901
                </th>
                <td class="px-6 py-4">
                    Ben White
                </td>
                <td class="px-6 py-4">
                    IDTB080092
                </td>
                <td class="px-6 py-4">
                12/20/2024
                </td>
                <td class="px-6 py-4">
                Best Best
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ReportData